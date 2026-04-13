interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  image: string;
}

const PageHeader = ({ title, subtitle, breadcrumb, image }: PageHeaderProps) => (
  <section className="relative w-full h-[400px] md:h-[500px] lg:h-[300px]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4 text-center md:text-left">
      {breadcrumb && (
        <p className="text-sm text-white/70 mb-2">{breadcrumb}</p>
      )}
      <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-white/90 max-w-3xl drop-shadow-md">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHeader;