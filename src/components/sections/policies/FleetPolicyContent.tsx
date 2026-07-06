import { AnimateIn, StaggerContainer, StaggerItem } from "@/components/shared/motion";

const keyAreas = [
  {
    title: "Safety and Trust",
    points: [
      "Prioritize safety through compliance with traffic laws, defensive driving, and safe road behavior.",
      "Maintain trustworthy behavior on the road and when handling company assets.",
      "Report defects, malfunctions, incidents, accidents, and maintenance needs promptly.",
      "Follow established accident reporting procedures and participate in regular safety meetings.",
    ],
  },
  {
    title: "Vehicle Assignment and Usage",
    points: [
      "Truck assignment is based on operational requirements, vehicle capacity, and driver qualification.",
      "Only authorized drivers with valid licenses and relevant training may operate company vehicles.",
      "Company vehicles are strictly for business use; personal use is prohibited.",
    ],
  },
  {
    title: "Vehicle Maintenance and Efficiency",
    points: [
      "Vehicles follow routine inspections and preventive maintenance schedules.",
      "Repairs must be authorized and performed by approved service providers.",
      "Fuel-efficient driving and accurate maintenance records are required.",
    ],
  },
  {
    title: "Driver Training and Evaluation",
    points: [
      "All drivers receive training on traffic laws, defensive driving, emergency response, and fuel efficiency.",
      "Regular evaluations assess skill, policy compliance, and improvement opportunities.",
    ],
  },
  {
    title: "Vehicle Tracking and Telematics",
    points: [
      "GPS and telematics are used for real-time monitoring of location, speed, and driving behavior.",
      "Data is analyzed to improve safety, optimize routes, and reduce fuel costs.",
    ],
  },
  {
    title: "Accident Investigation and Prevention",
    points: [
      "All accidents are investigated to identify root causes and prevention measures.",
      "Findings are integrated into ongoing safety meetings and field practices.",
    ],
  },
  {
    title: "Fuel Management and Cost Control",
    points: [
      "Fuel card controls track usage, monitor costs, and reduce unauthorized purchases.",
      "Drivers are encouraged and rewarded for meeting fuel-efficiency targets.",
    ],
  },
  {
    title: "Vehicle Replacement and Disposal",
    points: [
      "Replacement decisions are guided by mileage, age, and maintenance costs.",
      "Old vehicles are disposed of using safe and environmentally responsible procedures.",
    ],
  },
  {
    title: "Emergency Preparedness",
    points: [
      "Every vehicle carries an emergency kit with essential supplies.",
      "Emergency procedures are documented and communicated for accidents, breakdowns, and security threats.",
    ],
  },
  {
    title: "Sustainability and Environmental Impact",
    points: [
      "The company evaluates eco-friendly or hybrid fleet options.",
      "Fuel-efficiency initiatives are promoted to reduce environmental impact.",
    ],
  },
] as const;

const complianceItems = [
  "Monitoring: Managers monitor compliance and address policy breaches.",
  "Disciplinary Action: Non-compliance may lead to disciplinary action, including termination.",
  "Penalties: Written warnings, suspensions, or termination depending on violation severity.",
] as const;

export function FleetPolicyContent() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <AnimateIn className="mx-auto max-w-4xl">
          <span className="top-head">Transport Governance</span>
          <h2 className="mt-2 font-serif text-3xl font-bold text-brand-heading-alt">Fleet Policy</h2>
          <p className="mt-4 text-brand-body">
            This policy defines how G3-Biz Ltd manages and operates its fleet to ensure safety, efficiency,
            reliability, and regulatory compliance across all logistics activities.
          </p>
        </AnimateIn>

        <StaggerContainer className="mt-10 grid gap-5 lg:grid-cols-3">
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Introduction</h3>
              <p className="mt-3 text-sm text-brand-body">
                The fleet policy aligns with G3-Biz Ltd&apos;s vision to be the most reputable distribution
                company in Cameroon in trust, expansion, and value creation.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Purpose</h3>
              <p className="mt-3 text-sm text-brand-body">
                Ensure safe, efficient, and sustainable operations that minimize costs, maximize asset use,
                protect company reputation and assets, and comply with relevant laws.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="card-modern h-full p-6">
              <h3 className="font-serif text-lg font-bold text-brand-heading">Scope</h3>
              <p className="mt-3 text-sm text-brand-body">
                Applies to all G3-Biz Ltd drivers and all company-owned vehicles used in operations.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <div className="mt-12">
          <AnimateIn>
            <h3 className="font-serif text-2xl font-bold text-brand-heading-alt">Key Areas</h3>
          </AnimateIn>
          <StaggerContainer className="mt-5 grid gap-5 md:grid-cols-2">
            {keyAreas.map((area) => (
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

        <AnimateIn className="mt-12 card-modern p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Compliance</h3>
          <ul className="mt-3 space-y-2">
            {complianceItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-brand-body">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow" />
                {item}
              </li>
            ))}
          </ul>
        </AnimateIn>

        <AnimateIn className="mt-8 rounded-xl border border-brand-border bg-brand-light p-6">
          <h3 className="font-serif text-xl font-bold text-brand-heading">Review and Update</h3>
          <p className="mt-3 text-sm text-brand-body">
            This Fleet Policy is reviewed annually to ensure continued effectiveness and alignment with
            G3-Biz Ltd objectives.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
