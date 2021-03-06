

const Card = ({ imgSrc, heading, para }) => {
    return (
        <div className="card p-4 text-center bg-white rounded-2xl shadow-2xl">
            <div className="img-container grid place-items-center">
                <img src={imgSrc} alt="" className=" object-cover w-1/2 md:w-3/4 inline-block" />
            </div>
            <div className="card-content pb-3">
                <h3 className="mb-4 font-bold">{heading}</h3>
                <p className=" font-light">{para}</p>
            </div>
        </div>


    );

}
export default Card;