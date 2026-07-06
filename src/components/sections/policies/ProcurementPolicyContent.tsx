import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const objectives = [
  "Procure goods and services of the highest quality at competitive prices.",
  "Ensure timely delivery to meet operational requirements.",
  "Build and maintain relationships with reliable and ethical suppliers.",
  "Comply with all relevant laws, regulations, and industry standards.",
  "Minimize procurement risks and maximize company value.",
] as const;

const principles = [
  { title: "Integrity and Transparency", detail: "All procurement activities are conducted honestly and transparently." },
  { title: "Fairness and Impartiality", detail: "All suppliers are treated fairly and without bias." },
  { title: "Competition", detail: "Competitive bidding is encouraged to secure best value for money." },
  { title: "Value for Money", detail: "Decisions consider total cost, quality, and performance outcomes." },
  { title: "Sustainability", detail: "Environmental and social impacts are considered in procurement decisions." },
] as const;

const supplierManagement = [
  "Supplier Registration: All potential suppliers must register with G3 Biz.",
  "Supplier Evaluation: Assessed on financial stability, quality, delivery performance, and ethics.",
  "Supplier Performance: Monitored regularly with feedback and corrective action where needed.",
  "Supplier Relationship Management: Long-term partnerships built on trust and cooperation.",
] as const;

const processSteps = [
  "Requisition: Departments submit purchase requisitions through line managers.",
  "Purchase Order: Issued to approved suppliers after authorization and account controls.",
  "Delivery and Acceptance: Goods/services are inspected for specification compliance.",
  "Payment: Processed according to purchase order terms and conditions.",
  "Competitive Bidding: Purchases above 100,000 FCFA require at least three qualified quotations.",
  "Payment Terms: Amounts above 100,000 FCFA are paid via cheque with complete supplier bank details.",
  "Supplier Documentation: Suppliers must provide a valid Tax Payer Identification Number (TPIN).",
] as const;

const governanceAreas = [
  {
    title: "Inventory Management",
    points: [
      "Maintain optimal inventory levels to balance supply and demand.",
      "Review stock regularly to reduce carrying costs and prevent stockouts.",
      "Use inventory control systems for visibility and tracking.",
    ],
  },
  {
    title: "Contract Management",
    points: [
      "Contracts must be clear and comprehensive.",
      "Contract performance is monitored for compliance.",
      "Amendments require written approval by authorized personnel.",
    ],
  },
  {
    title: "Cost Management",
    points: [
      "Conduct cost analysis to identify savings opportunities.",
      "Perform price comparisons for market competitiveness.",
      "Pursue volume discounts and other cost-reduction measures.",
    ],
  },
  {
    title: "Risk Management",
    points: [
      "Identify and assess procurement risks.",
      "Implement risk mitigation strategies.",
      "Consider insurance for significant procurement exposures.",
    ],
  },
  {
    title: "Compliance",
    points: [
      "Comply with all applicable laws and industry standards.",
      "Conduct regular compliance audits.",
    ],
  },
  {
    title: "Ethical Sourcing",
    points: [
      "Promote ethical and sustainable procurement practices.",
      "Require suppliers to adhere to G3 Biz code of conduct.",
    ],
  },
] as const;

export function ProcurementPolicyContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-4xl">
          <span className="top-head">Sourcing & Procurement</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">Procurement Policy</h2>
          <p className="mt-4 text-brand-body">
            This policy sets principles, procedures, and controls for acquiring goods, services, and works in a way
            that is efficient, economical, transparent, and aligned with G3 Biz strategic objectives.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-2">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Scope</h3>
              <p className="mt-3 text-sm text-brand-body">
                Applies to all procurement activities, including heavy-duty trucks, spare parts, mechanical services,
                office utilities, and administrative utilities.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Procurement Objectives</h3>
              <ul className="mt-3 space-y-2">
                {objectives.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <AnimateIn className="mt-10">
          <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">Procurement Principles</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {principles.map((item) => (
              <div key={item.title} className="card-modern p-5">
                <h4 className="font-serif text-lg font-bold text-brand-heading">{item.title}</h4>
                <p className="mt-2 text-sm text-brand-body">{item.detail}</p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn className="mt-10 card-modern p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Supplier Selection and Management</h3>
          <ul className="mt-3 space-y-2">
            {supplierManagement.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <AnimateIn className="mt-10 card-modern p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Procurement Process</h3>
          <ul className="mt-3 space-y-2">
            {processSteps.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <div className="mt-12">
          <AnimateIn>
            <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">Governance Areas</h3>
          </AnimateIn>
          <StaggerContainer className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {governanceAreas.map((area) => (
              <StaggerItem key={area.title}>
                <div className="card-modern h-full p-6">
                  <h4 className="font-serif text-lg font-bold text-brand-heading">{area.title}</h4>
                  <ul className="mt-3 space-y-2">
                    {area.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-brand-body">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <AnimateIn className="mt-12 rounded-xl border border-brand-border bg-brand-light p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Procurement Organization</h3>
          <p className="mt-3 text-sm text-brand-body">
            Procurement is managed by the Human Resource and Administration department, overseen by the Depot Manager.
          </p>
          <p className="mt-3 text-sm text-brand-body">
            This policy acts as a framework and may be amended as business needs and legal requirements evolve.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
