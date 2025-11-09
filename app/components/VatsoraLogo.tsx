import Image from 'next/image'

export default function VatsoraLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <Image
        src="/Logo.png"
        alt="Vatsora Logo"
        width={100}
        height={100}
        className="w-full h-full object-contain"
        style={{ mixBlendMode: 'lighten' }}
        priority
      />
    </div>
  );
}
