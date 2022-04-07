import { memo } from "react";
import { Button } from "./Button";

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: GenreResponseProps[];
  onClick:(id: number) => void;
  selectedGenreId: number;
}


const ComponentSideBar:React.FC<SideBarProps> = ({ genres, selectedGenreId, onClick }:SideBarProps) => {
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => onClick(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  );  
}

export const SideBar = memo(ComponentSideBar, (prevProps, nextProps) => {
  return (
    prevProps.selectedGenreId === nextProps.selectedGenreId &&
    prevProps.genres.length === nextProps.genres.length
  );
});