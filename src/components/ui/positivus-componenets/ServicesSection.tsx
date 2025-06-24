import { services } from "@/lib/constants";
import type { ServiceWithHandler } from "@/lib/types";
import type { FC } from "react";
import ServiceCard from "./ServiceCard";
import { toast } from "sonner";

const ServicesSection: FC = () => {
  const servicesWithHandlers: ServiceWithHandler[] = services.map(
    (service) => ({
      ...service,
      onLearnMore: () =>
        toast.warning(`This is ${service.title} is not available !`),
    })
  );

  return (
    <div className="min-h-screen bg-white p-8">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="services-title mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 mb-8">
            <div className="inline-block bg-[#B6F09C] px-6 py-3 rounded-lg text-3xl font-bold shadow-md mb-4 lg:mb-0">
              Services
            </div>
            <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
              At our digital marketing agency, we offer a range of services to
              help businesses grow and succeed online. These services include:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesWithHandlers.map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
