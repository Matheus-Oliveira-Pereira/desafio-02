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


export const SideBar:React.FC<SideBarProps> = ({ genres, selectedGenreId, onClick }:SideBarProps) => {
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