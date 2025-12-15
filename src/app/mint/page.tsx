/** @format */

import dynamic from "next/dynamic";
import UploadBox from "../../components/UploadBox";

export default function MintPage() {
\treturn (
\t\t<section className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
\t\t\t<h2 className="text-xl sm:text-2xl font-bold mb-4">Mint Property Deed (UI only)</h2>
\t\t\t<div className="card-glass p-4 sm:p-6">
\t\t\t\t<form className="space-y-4">
\t\t\t\t\t<div>
\t\t\t\t\t\t<label className="block text-sm font-medium mb-1">Title</label>
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclassName="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base"
\t\t\t\t\t\t\tplaceholder="3-bedroom duplex, Lekki"
\t\t\t\t\t\t/>
\t\t\t\t\t</div>

\t\t\t\t\t<div>
\t\t\t\t\t\t<label className="block text-sm font-medium mb-1">Location</label>
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclassName="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base"
\t\t\t\t\t\t\tplaceholder="Lekki Phase 1, Lagos"
\t\t\t\t\t\t/>
\t\t\t\t\t</div>

\t\t\t\t\t<div>
\t\t\t\t\t\t<label className="block text-sm font-medium mb-1">Valuation</label>
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclassName="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base"
\t\t\t\t\t\t\tplaceholder="₦120,000,000"
\t\t\t\t\t\t/>
\t\t\t\t\t</div>

\t\t\t\t\t<div>
\t\t\t\t\t\t<label className="block text-sm font-medium mb-1">
\t\t\t\t\t\t\tDescription
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<textarea
\t\t\t\t\t\t\tclassName="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-base"
\t\t\t\t\t\t\trows={5}
\t\t\t\t\t\t/>
\t\t\t\t\t</div>

\t\t\t\t\t<div>
\t\t\t\t\t\t<label className="block text-sm font-medium mb-1">
\t\t\t\t\t\t\tUpload Images / Documents
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<UploadBox />
\t\t\t\t\t</div>

\t\t\t\t\t<div className="pt-4">
\t\t\t\t\t\t<button
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tclassName="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-mantle-amber text-white font-semibold shadow-soft min-h-[48px]">
\t\t\t\t\t\t\tPrepare Mint (UI Only)
\t\t\t\t\t\t</button>
\t\t\t\t\t</div>
\t\t\t\t</form>
\t\t\t</div>
\t\t</section>
\t);
}
