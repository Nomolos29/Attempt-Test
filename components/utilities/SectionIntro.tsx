import React from 'react'

export interface SectionIntroProps {
    labelText?: string;
    icon?: React.ReactNode;
    alignment?: "left" | "center";
    placement?: "left" | "center";
    width?: "small" | "wide" | "max-width";
    sectionTitle: string;
    description: string;
}

const SectionIntro: React.FC<SectionIntroProps> = ({labelText, icon, alignment = "center", placement = "center", width, sectionTitle, description}) => {
  return (
    <main className={`flex flex-col ${placement === "center" ? "text-center items-center" : ""} py-10`}>
        <div className={`flex flex-col ${alignment === "center" ? "text-center items-center" : ""} ${width === "small" ? "w-[700px]" : width === "wide" ? "w-[900px] gap-y-3" : width === "max-width" ? "w-full gap-y-5" : "w-[850px] gap-y-1"}`}>
            {labelText && <span className='flex items-center gap-x-2 text-[14px]'>{icon} <p className='text-[#1F2937]'>{labelText}</p></span>}
            <h3 className={`text-black ${labelText ? "text-[48px]" : "font-medium text-[40px]"}`}>{sectionTitle}</h3>
            <p className={`${labelText ? "text-[14px]" : "text-lg"}`}>{description}</p>
        </div>
    </main>
  )
}

export default SectionIntro