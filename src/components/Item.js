import React from 'react'

export const Item = ({ data }) => {

    const { title, authors, publishedDate } = data.volumeInfo;
    const { thumbnail: img } = data.volumeInfo.imageLinks || "";

    return (
        <div className="flex w-full h-[200px] items-center justify-center text-center bg-brown-brown text-white rounded mb-[30px] text-sm">
            <img className="rounded-sm m-[5px]" src={img} alt="" />
            <div className="flex-col m-[5px]">
                <h3>{title}</h3>
                <p>{authors + " "}<span>{publishedDate}</span></p>
            </div>
        </div>
    )
}
