import Link from 'next/link'
import React from 'react'


interface ListItemProps {
    icon?: React.ReactNode
    hrefUrl?: string
    title: string
    description: string
    className?: string
}


const ListItem: React.FC<ListItemProps> = ({icon, hrefUrl, title, description, className}) => {
  return (
    <div className={`flex gap-x-3 ${className}`}>
        {icon}

        <Link href={hrefUrl ? hrefUrl : "#"}>
            <h4 className='text-[16px] font-semibold'>{title}</h4>
            <p className='text-[12px] font-medium'>{description}</p>
        </Link>
    </div>
  )
}

export default ListItem