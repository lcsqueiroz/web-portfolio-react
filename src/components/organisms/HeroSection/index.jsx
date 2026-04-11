import Button from '../../atoms/Button';
import { personal } from '../../../constants/personal';

const HeroSection = () => {
  const handleCTAClick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center max-w-5xl mx-auto px-6 py-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
        {/* Coluna esquerda — Texto + CTA */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-gray-500 text-lg leading-none">
              Olá, me chamo
            </span>
            <h1 className="text-4xl  md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="text-blue-500">{personal.name}</span>
            </h1>
            <p className="text-xl font-medium text-gray-700">{personal.role}</p>
          </div>

          <p className="text-gray-500 leading-relaxed">{personal.bio}</p>

          <div className="flex items-center gap-6">
            <Button label="Ver Projetos" onClick={handleCTAClick} />
            <Button
              label="Entre em contato"
              onClick={handleContactClick}
              variant="ghost"
            />
          </div>
        </div>

        {/* Coluna direita — Foto + links */}
        <div className="flex flex-col items-center gap-6">
          {/* Foto */}
          <div className="w-72 h-72 md:w-80 md:h-80">
            <img
              src={personal.photoUrl}
              alt={`Foto de ${personal.name}`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
