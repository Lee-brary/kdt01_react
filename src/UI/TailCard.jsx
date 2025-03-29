
export default function TailCard({title, subtitle, imgurl, kw}) {
      

    let sptags = kw.includes(',') ? kw.split(',') : [kw] ;
    sptags = sptags.map(keyword => <span    
                                    className="inline-block bg-gray-200
                                                rounded-full px-3 py-1
                                                text-sm font-semibold
                                                text-gray-700 mr-2 mb-2"
                                    key = {keyword}>{keyword}</span>   
                        ) ;
    

    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={imgurl.includes('http:')
                                                ? imgurl.replace('http:', 'https:')
                                                : imgurl }

                alt={title} />
            </a>
            <div className="p-5">
                <a href="#">
                    
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
                <p>
                    {sptags}
                </p>
            </div>
        </div>)
}