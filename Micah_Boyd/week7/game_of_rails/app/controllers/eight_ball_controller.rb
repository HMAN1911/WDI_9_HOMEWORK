class EightBallController < ApplicationController

  def question
  end

  def answer
    @answer = [
      "That's an interesting question, ask me again later",
      "What do you think?",
      "I asked that once to an old friend, didn't like the answer I got",
      "I think you know",
      "Yes",
      "Sure",
      "Do I look like a guru on a mountainside?",
      "You need to be more specific",
      "Thats cute",
      "Well it depends"
    ]
  end

end
