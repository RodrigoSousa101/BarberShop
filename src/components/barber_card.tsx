type BarberCardProps = {
  nome: string;
  tipo: string;
  descricao: string;
  imagem: string; // nova propriedade
};

function BarberCard({ nome, tipo, descricao, imagem }: BarberCardProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 w-[320px] h-[380px] group">
      {/* Imagem de fundo */}
      <img
        src={imagem}
        alt="Barbeiro"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
      {/* Conteúdo */}
      <div className="relative z-20 flex flex-col justify-end h-full p-6 overflow-y-auto">
        <p className="text-2xl font-bold text-white drop-shadow mb-1">{nome}</p>
        <p className="text-gold font-semibold mb-3 uppercase tracking-wide">{tipo}</p>
        <p className="text-gray-100 text-sm drop-shadow">{descricao}</p>
      </div>
    </div>
  );
}
export default BarberCard;