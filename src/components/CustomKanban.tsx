import { CardType } from "../contants/Constants";
import { Board } from "./Board/Board";

export const CustomKanban = ({ cardsTeam }: { cardsTeam: CardType[] }) => {
  return (
    <div className="h-screen w-full ">
      <Board cardsTeam={cardsTeam} />
    </div>
  );
};
