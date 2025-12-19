/** @format */

"use client";

import { useState, useEffect, Suspense } from "react";
import { 
  Upload, 
  Home, 
  Building2,
  Loader2,
  FileText,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Plus
} from "lucide-react";
import { useAccount, useWaitForTransactionReceipt } from "wagmi";
import { keccak256, encodePacked } from "viem";
import { useTokenization } from "@/hooks/useTokenization";
import { useRouter, useSearchParams } from "next/navigation";
import AuthGuard from "@/components/AuthGuard";
import { motion, AnimatePresence } from "framer-motion";

function MintForm() {
  const { address, isConnected } = useAccount();
  const { tokenizeProperty, loading: isMinting, error: mintError } = useTokenization();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [txHash, setTxHash] = useState<`0x${string}` | undefined>(undefined);
  
  const { data: receipt, isLoading: isWaitingReceipt } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    valuation: "",
    description: "",
    propertyType: "residential",
    image: "",
  });

  // Effect to pre-fill form from query parameters
  useEffect(() => {
    const title = searchParams.get("title");
    const location = searchParams.get("location");
    const valuation = searchParams.get("valuation");
    const description = searchParams.get("description");
    const type = searchParams.get("type");
    const image = searchParams.get("image");

    if (title || location || valuation || description || type || image) {
      setFormData({
        title: title || "",
        location: location || "",
        valuation: valuation || "",
        description: description || "",
        propertyType: type || "residential",
        image: image || "",
      });
    }
  }, [searchParams]);

  const handleFileSelect = (files: File[]) => {
    setSelectedFiles(prev => [...prev, ...files.slice(0, 5 - prev.length)]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected || !address) {
        alert("Please connect your wallet first");
        return;
    }

    if (!formData.title || !formData.location || !formData.valuation) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      // 1. Generate Metadata (Simulated IPFS Upload)
      const metadata = {
        name: formData.title,
        description: formData.description,
        location: formData.location,
        type: formData.propertyType,
        valuation: formData.valuation,
        timestamp: new Date().toISOString(),
        files: selectedFiles.map(f => f.name) // In prod, this would be IPFS hashes
      };

      // Encode metadata as Data URI for immediate availability
      const metadataURI = `data:application/json;base64,${btoa(JSON.stringify(metadata))}`;
      
      // 2. Generate Property ID & Private Commitment (ZK-ready hash anchor)
      const propertyId = `PROP-${Date.now()}`;
      
      // Simulate creating a ZK Commitment for private files/data
      const privateDataString = JSON.stringify({
        valuation: formData.valuation,
        files: selectedFiles.map(f => f.name + f.size),
        salt: propertyId // In real zk, this would be a high-entropy secret
      });
      const privateCommitment = keccak256(encodePacked(["string"], [privateDataString]));

      console.log("Minting Deed with ZK Privacy:", { propertyId, privateCommitment });

      // 3. Call Contract
      const { hash, success } = await tokenizeProperty(
        propertyId,
        metadataURI,
        "0", // Minting fee
        privateCommitment,
        address as `0x${string}`
      );

      if (success && hash) {
        setTxHash(hash);
      } else {
        throw new Error("Transaction failed to initiate");
      }
      
    } catch (error: any) {
      console.error("Mint Error:", error);
      alert(`Error: ${error.message || "Failed to mint property deed"}`);
    }
  };
  
  // Success View Component
  if (receipt && receipt.status === "success") {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 max-w-lg w-full text-center relative overflow-hidden"
        >
          {/* Success Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute inset-0 bg-emerald-400/20 rounded-full"
            />
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            Deed Minted Successfully!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Your property deed for <span className="font-bold text-gray-900 dark:text-white">"{formData.title}"</span> has been securely tokenized on the Mantle Network.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6 mb-8 border border-gray-100 dark:border-gray-800 text-left space-y-4">
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Transaction Hash</span>
                <a 
                  href={`https://explorer.sepolia.mantle.xyz/tx/${receipt.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:underline"
                >
                  {receipt.transactionHash.slice(0, 8)}...{receipt.transactionHash.slice(-6)}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
             </div>
             <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Network</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   Mantle Sepolia
                </span>
             </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
               onClick={() => router.push("/dashboard")}
               className="flex-1 px-6 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
               onClick={() => {
                 setTxHash(undefined);
                 setSelectedFiles([]);
                 setFormData({
                  title: "",
                  location: "",
                  valuation: "",
                  description: "",
                  propertyType: "residential",
                  image: "",
                 });
               }}
               className="flex-1 px-6 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Mint Another
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const isProcessing = isMinting || isWaitingReceipt;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 py-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full mb-4 ring-1 ring-blue-100 dark:ring-blue-800">
            <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              PROPERTY REGISTRATION
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
            Mint Property Deed
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Create a unique, on-chain digital deed representing your real estate asset.
          </p>
        </div>

        {/* Global Error Alert */}
        {mintError && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-3 text-red-700 dark:text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm font-medium">{mintError}</p>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300">
          
          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8">
            <div className="space-y-8">
              
              {/* Context Block */}
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-100 dark:border-blue-800/50">
                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Home className="w-5 h-5 text-blue-500" />
                    Property Information
                 </h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400">
                    This information will be embedded in the NFT metadata. Ensure all details are accurate as the blockchain record is immutable.
                 </p>
              </div>

              {/* Property Details Inputs */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Property Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. Sunset Villa"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                     className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. 123 Ocean Dr, Miami, FL"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Valuation (USD) <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="valuation"
                    value={formData.valuation}
                    onChange={handleInputChange}
                     className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="e.g. 500000"
                    type="number"
                    step="0.01"
                    required
                  />
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Initial estimated value of the property in USD.
                  </p>
                </div>

                <div className="space-y-2">
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="land">Land</option>
                    <option value="mixed-use">Mixed-Use</option>
                  </select>
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-base bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all min-h-[120px] resize-y placeholder-gray-400 dark:placeholder-gray-500"
                    placeholder="Describe main features, amenities, and unique selling points..."
                    rows={4}
                  />
                </div>
              </div>

              {/* File Upload Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Supporting Documents
                </label>
                
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-8 text-center hover:border-blue-400 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 group">
                  <div className="mx-auto w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-gray-900 dark:text-white font-medium mb-1">
                    Upload Property Deed & Photos
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                    Recommended: Property Deed, Owner ID, and Valuation Reports.
                  </p>
                  <p className="text-xs text-blue-500 dark:text-blue-400 mb-4 font-medium flex items-center justify-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Files are encrypted & stored privately via ZK-Commitments.
                  </p>
                  
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => e.target.files && handleFileSelect(Array.from(e.target.files))}
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors shadow-sm"
                  >
                    Browse Files
                  </label>
                </div>

                {/* Selected Files List */}
                {(selectedFiles.length > 0 || formData.image) && (
                  <div className="grid gap-3">
                    <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Selected Documents</h5>
                    
                    {/* Pre-filled Marketplace Asset */}
                    {formData.image && (
                      <div className="flex items-center justify-between bg-blue-50/50 dark:bg-blue-900/10 rounded-xl p-4 border border-blue-100 dark:border-blue-800/50 shadow-sm transition-all ring-1 ring-blue-200 dark:ring-blue-800/30">
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-blue-200 dark:border-blue-700">
                             <img src={formData.image} alt="Property" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-gray-900 dark:text-white truncate">
                              {formData.title || "Marketplace Property Asset"}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded uppercase font-bold">
                                Initial Property Asset
                              </span>
                              <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                                <CheckCircle className="w-2.5 h-2.5" />
                                Verified
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-2 text-blue-400">
                          <Home className="w-5 h-5" />
                        </div>
                      </div>
                    )}

                    {selectedFiles.map((file, index) => {
                      // Simple logic to guess category based on name or index for demo
                      let category = "Ownership Document";
                      if (index === 1) category = "Identity Verification";
                      if (index === 2) category = "Valuation Report";
                      if (index > 2) category = "Other Supporting Doc";

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-white dark:bg-gray-800/80 rounded-xl p-4 border border-gray-200 dark:border-gray-700 shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                               <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="text-sm font-bold text-gray-900 dark:text-white truncate">
                                {file.name}
                              </span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded uppercase font-bold">
                                  {category}
                                </span>
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                  {(file.size / 1024).toFixed(0)} KB
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                                  <CheckCircle className="w-2.5 h-2.5" />
                                  Private
                                </span>
                              </div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(index)}
                            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            aria-label="Remove file"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-6 mt-8 border-t border-gray-200 dark:border-gray-700">
                <button
                  type="submit"
                  disabled={isProcessing || !isConnected}
                   className={`w-full px-6 py-4 text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
                    isProcessing || !isConnected 
                      ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed opacity-70" 
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      {isWaitingReceipt ? "Confirming on Mantle..." : "Initiating Transaction..."}
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      Mint Property Deed
                    </>
                  )}
                </button>
                
                {!isConnected && (
                    <p className="text-center text-sm text-red-500 mt-3 font-medium">
                        Wallet not connected. Please connect via the navigation bar.
                    </p>
                )}
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center px-4">
                  By minting, you agree to the StrataDeed Terms of Service. A gas fee ($MNT) will be required to execute this transaction on the Mantle Network.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function MintPage() {
  return (
    <AuthGuard>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
        </div>
      }>
        <MintForm />
      </Suspense>
    </AuthGuard>
  );
}
