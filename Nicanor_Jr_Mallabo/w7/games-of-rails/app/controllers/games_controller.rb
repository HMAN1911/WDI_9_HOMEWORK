class GamesController < ApplicationController

    def answers
        answers = [
        "It is certain", 
        "It is decidedly so", 
        "Without a doubt", 
        "Yes, definitely", 
        "You may rely on it", 
        "As I see it, yes", 
        "Most likely", 
        "Outlook good", 
        "Yes", 
        "Signs point to yes", 
        "Reply hazy try again", 
        "Ask again later", 
        "Better not tell you now", 
        "Cannot predict now", 
        "Concentrate and ask again", 
        "Don't count on it", 
        "My reply is no", 
        "My sources say no", 
        "Outlook not so good", 
        "Very doubtful"]

        @question = params[:question]
        @answer = answers.sample

        render :answers
    end

    def rock_paper_scissors_play
        if params[:throw] == 'rock' || params[:throw] == 'paper' || params[:throw] == 'scissors'
        # binding.pry
            render :rock_paper_scissors
        end
    end

    def result
        # binding.pry
        p2 = params[:p2]
        if (params[:throw] == p2)
            # redirect_to '/games/draw'
            render :draw
        elsif (params[:throw] == 'rock' && p2 == 'scissors') || (params[:throw] == 'scissors' && p2 == 'paper') || (params[:throw] == 'paper' && p2 == 'rock')
            render :player1wins
        else
            render :player2wins
        end
    end

    def secret_number_decide
        answer = rand(1..10).to_s

        if params[:number] == answer
            render :secretnumberwin
        else
            render :secretnumberlose
        end
    end

end
