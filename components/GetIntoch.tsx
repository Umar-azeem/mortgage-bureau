import { Mail, Phone } from "lucide-react";
import React from "react";

function GetIntoch() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-10">
        {/* Email */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-[#1A2F5E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1A2F5E] transition-colors">
            <Mail className="w-6 h-6 text-[#1A2F5E] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-sm font-semibold text-slate-500 mb-2">Email</h3>
          <a
            href="mailto:ken.j.schmidt@huntington.com"
            className="text-slate-800 hover:text-[#1A2F5E] transition break-all"
          >
            mike@themortgagebureau.com
          </a>
        </div>

        {/* Mobile */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all group">
          <div className="w-12 h-12 bg-[#1A2F5E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1A2F5E] transition-colors">
            <Phone className="w-6 h-6 text-[#1A2F5E] group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-sm font-semibold text-slate-500 mb-2">Mobile</h3>
          <a
            href="tel:+16304798545"
            className="text-slate-800 hover:text-[#1A2F5E] transition text-lg font-semibold"
          >
            (303) 929-4700{" "}
          </a>
        </div>

        {/* Phone */}

        {/* Fax */}
      </div>
    </>
  );
}

export default GetIntoch;
