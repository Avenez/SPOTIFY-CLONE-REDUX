import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { viewAlbumAction, viewArtistAction } from "../redux/action/index";

const AlbumCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="col text-center">
      <Link onClick={() => dispatch(viewAlbumAction(props))} to={"/album"}>
        <img className="img-fluid" src={props.cover} alt="1" />
      </Link>

      <p>
        <Link className="text-decoration-none" onClick={() => dispatch(viewAlbumAction(props))} to={"/album"}>
          Album: {props.album}
        </Link>
        <br />

        <Link onClick={() => dispatch(viewArtistAction(props))} className="text-decoration-none" to={"/artist"}>
          Artist: {props.artist}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
