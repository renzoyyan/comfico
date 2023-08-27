import { services } from '../constants';

export const Services = () => {
  return (
    <section className="relative lg:h-screen">
      <div className="container grid h-full items-center py-36 sm:py-56">
        <div>
          <h2 className="section-heading max-w-[977px] text-[2rem] leading-[3rem] xl:leading-[4.5rem]">
            We are committed to ensuring exceptional customer experiences
          </h2>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-12 sm:mt-14 lg:grid lg:grid-cols-2 lg:gap-6 xl:grid-cols-4">
            {services.map((service, idx) => (
              <div key={idx}>
                <div className="inline-flex h-[66px] w-[66px] items-center justify-center rounded-lg bg-secondary">
                  <service.icon className="icon-default shrink-0 text-brand-1" />
                </div>

                <h4 className="mb-3 mt-4 text-xl font-semibold">{service.label}</h4>
                <p className="max-w-xs text-brand-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
