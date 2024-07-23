import PropTypes from "prop-types"
import {GifItem} from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({categories}) => {

    const {images,isLoading} = useFetchGifs(categories) 



    return (
        <>
            <h2>{categories}</h2>
            {isLoading===true?<p>Cargando</p>:<div className="card-grid">
                {images.map(Img=>
                    <GifItem key={Img.id} {...Img} />
                    )}
            </div>}

        </>
    )
}

GifGrid.propTypes={
    categories: PropTypes.string
}