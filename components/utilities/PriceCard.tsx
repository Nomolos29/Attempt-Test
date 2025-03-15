import Link from 'next/link';
import React from 'react'

interface PriceCardProps {
    cardType: "plan" | "plan-feature";
    title: string;
    details: string;
    price?: string;
    label?: boolean;
    buttonCTA?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({cardType, title, details, price, label, buttonCTA}) => {
  return (
    <main className={`flex flex-col md:min-h-[300px] border h-full rounded-[24px] ${cardType === "plan" ? "pt-10" : ""} p-7 border-[#D9D9D9] gap-y-8`}>
      <span className='flex flex-col gap-y-3 justify-between h-full'>
        <h3 className={cardType === "plan" ? "text-[30px] font-bold" : "text-[24px] font-medium"}>{title}</h3>
        <p className='text-lg'>{details}</p>
      </span>

      <div className='flex flex-col'>
        {price && <p className='leading-none text-[44px]'><span className='text-[64px]'>{price}</span>/mo.</p>}
        {label && <p className='text-lg'>No Extra Charges (No meals included)</p>}
      </div>

      {buttonCTA && 
        <Link href="#">
          <button type='button' className='w-full bg-black py-2 rounded-[6px] text-white'>
            {buttonCTA}
          </button>
        </Link>
      }
    </main>
  )
}

export default PriceCard