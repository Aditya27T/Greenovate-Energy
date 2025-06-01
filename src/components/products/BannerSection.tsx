const BannerSection = ({ title }: { title: string }) => {
    return (
      <section className="bg-primary py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        </div>
      </section>
    );
  };
  
  export default BannerSection;