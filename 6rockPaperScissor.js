 /*let score={
        wins:0,
        losses:0,
        ties:0
      };
      */
      
     // console.log(JSON.parse(localStorage.getItem(`score`)));
      
      let score=JSON.parse(localStorage.getItem(`score`))||{
          wins:0,
          losses:0,
          ties:0
        };
         document.querySelector('.js-score').innerHTML=` WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`;
    /*  if(score===null){
        score={
          wins:0,
          losses:0,
          ties:0
        };
      }

       if(!score){
        score={
          wins:0,
          losses:0,
          ties:0
        };
     }*/

        let isautoplaying= false;
        let intervalId;
        function autoplay(){
         if(!isautoplaying){
           intervalId=setInterval(function(){
            const playerMove=pickCmpMove();
            playGame(playerMove);
          },1000)
          isautoplaying=true;
          } else {
            clearInterval(intervalId);
            isautoplaying=false;
          }
        }


      function playGame(playerMove){
        let compMove=pickCmpMove();
          result=``;
      if(playerMove===`Scissor`){
      if(compMove===`Rock`){
        result=`You lose.`;
      }else if (compMove===`Paper`){
        result=`You win.`;
      }else if (compMove===`Scissor`){
        result=`Tie.`;
      }
    }else if (playerMove===`Paper`){
        if(compMove===`Rock`){
        result=`You win.`;
      }else if (compMove===`Paper`){
        result=`Tie.`;
      }else if (compMove===`Scissor`){
        result=`You lose.`;
      }
    }else if(playerMove===`Rock`){
        if(compMove===`Rock`){
        result=`Tie.`;
      }else if (compMove===`Paper`){
        result=`You lose.`;
      }else if (compMove===`Scissor`){
        result=`You win.`;
      }
    }


    if(result===`You win.`){
      score.wins+=1;
    }else if(result===`You lose.`){
      score.losses+=1;
    }else if(result===`Tie.`){
      score.ties+=1;
    }

    localStorage.setItem(`score`,JSON.stringify(score));

    //  document.querySelector('.js-score').innerHTML=` WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`;

    updateScoreElement();

    document.querySelector('.js-result').innerHTML=result;

    document.querySelector('.js-moves').innerHTML=`You
  <img src="images/${playerMove}.png" class="move-icon">
  <img src="images/${compMove}.png" class="move-icon">
  Computer.`;

   /* alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}
    WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`);
*/
  }

      function updateScoreElement(){
         document.querySelector('.js-score').innerHTML=` WINS: ${score.wins}, LOSSES: ${score.losses}, TIES: ${score.ties}`;
      }

      function pickCmpMove(){
 randomNumber= Math.random();
     compMove=``;
    if(randomNumber>=0&&randomNumber<1/3){
    compMove=`Rock`; 
    } else if(randomNumber>=1/3 && randomNumber<2/3){
      compMove=`Paper`;
    }else if(randomNumber>=2/3 &&randomNumber<1) 
    {
  compMove=`Scissor`;
    }
    console.log(compMove);
    return compMove;
      }