using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chess_Game
{
    class Bishop : Piece
    {
        public Bishop(String colour) : base(colour)
        {
            Name = "B";
        }

        internal override bool validateMove(Move move, ChessBoard board)
        {
            if (Math.Abs(move.to.Item1 - move.from.Item1) == Math.Abs(move.to.Item2 - move.from.Item2) )
            {
                // End position possible
                int numberOfMoves = Math.Abs(move.to.Item1 - move.from.Item1) - 1;
                int moveYPosition = move.from.Item2;
                int moveXPosition = move.from.Item1;
                int Xdir = move.to.Item1 - move.from.Item1 > 0 ? 1 : -1;
                int Ydir = move.to.Item2 - move.from.Item2 > 0 ? 1 : -1;
                for (int i = 0; i < numberOfMoves; i++)
                {
                    moveXPosition += Xdir;
                    moveYPosition += Ydir;
                    if (board.Board[moveXPosition, moveYPosition].Piece != null)
                    {
                        return false;
                    }
                }
                return board.getSquare(move.to).Piece == null || board.getSquare(move.to).Piece.Colour != Colour;
                
            }
            return false;
        }
    }
}