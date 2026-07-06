import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const scopeItems = [
  "Human Resources records",
  "Accounts and finance records",
  "Operations records",
  "Legal and compliance records",
  "Internal policies and procedures",
] as const;

const documentRules = [
  "Properly titled and clearly labeled",
  "Dated and time-stamped",
  "Organized in an accessible filing system",
  "Electronic format preferred where possible",
  "Regular backup to secure off-site locations",
] as const;

const securityRules = [
  "Physical files stored in locked designated areas",
  "Access restricted to authorized personnel only",
  "Confidential records handled with strict care",
  "Data privacy controls including access protection",
  "Disaster recovery plan maintained",
] as const;

const archiveMatrix = [
  {
    category: "Human Resources",
    files:
      "Employee files, contracts, job descriptions, salary records, performance evaluations, leave records, disciplinary actions.",
    location: "HOD HR/Admin Office",
    owner: "HOD HR/Admin",
    access: "Managing Director, Depot Manager",
  },
  {
    category: "Accounts",
    files: "Financial statements, invoices, receipts, tax returns, payroll records, expense reports.",
    location: "Accounts Office, Archive Room 1 and 2",
    owner: "Accountant",
    access: "Managing Director, Depot Manager",
  },
  {
    category: "Operations",
    files: "Procurement documents, inventory records, maintenance logs, quality control reports.",
    location: "HOD HR/Admin Office Archive Room",
    owner: "HOD HR/Admin",
    access: "Managing Director, Depot Manager, HOD HR/Admin",
  },
  {
    category: "Legal and Compliance",
    files: "Contracts, legal correspondence, permits, licenses, insurance policies.",
    location: "HOD HR/Admin Office Archive Room",
    owner: "HOD HR/Admin",
    access: "Managing Director, Depot Manager, HOD HR/Admin",
  },
  {
    category: "Company Policies",
    files: "Internal policies, procedures, guidelines, rules and regulations.",
    location: "HOD HR/Admin Office Archive Room",
    owner: "HOD HR/Admin",
    access: "Managing Director, Depot Manager, HOD HR/Admin",
  },
] as const;

export function ArchivingPolicyContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-4xl">
          <span className="top-head">Policy Overview</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">
            Archiving Guidelines and Procedures
          </h2>
          <p className="mt-4 text-brand-body">
            This policy defines how G3-Biz Ltd organizes, stores, retains, secures, and retrieves
            critical records to ensure operational efficiency, confidentiality, and legal compliance.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-3">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Scope</h3>
              <ul className="mt-3 space-y-2">
                {scopeItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Document Management</h3>
              <ul className="mt-3 space-y-2">
                {documentRules.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Storage & Security</h3>
              <ul className="mt-3 space-y-2">
                {securityRules.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimateIn className="mt-12 card-modern p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Retention and Governance</h3>
          <p className="mt-3 text-brand-body">
            Archived documents are retained for a minimum of 10 years unless legal requirements
            specify otherwise. The HOD HR/Administration oversees adherence, while department heads and
            staff remain responsible for accurate record creation and maintenance.
          </p>
          <p className="mt-3 text-brand-body">
            Retrieval requires a written request to HOD HR/Administration. This policy is reviewed
            annually for legal, operational, and compliance updates.
          </p>
        </AnimateIn>

        <AnimateIn className="mt-12">
          <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">
            Appendix: Archiving Responsibility Matrix
          </h3>
          <div className="mt-4 overflow-x-auto rounded-xl border border-brand-border bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-brand-light">
                <tr>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Category</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Documents</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Archive Location</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Responsibility</th>
                  <th className="px-4 py-3 font-semibold text-brand-heading">Approved Access</th>
                </tr>
              </thead>
              <tbody>
                {archiveMatrix.map((row) => (
                  <tr key={row.category} className="border-t border-brand-border align-top">
                    <td className="px-4 py-3 font-medium text-brand-heading">{row.category}</td>
                    <td className="px-4 py-3 text-brand-body">{row.files}</td>
                    <td className="px-4 py-3 text-brand-body">{row.location}</td>
                    <td className="px-4 py-3 text-brand-body">{row.owner}</td>
                    <td className="px-4 py-3 text-brand-body">{row.access}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
