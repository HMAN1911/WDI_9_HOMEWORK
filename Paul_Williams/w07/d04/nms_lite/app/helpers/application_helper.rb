module ApplicationHelper
  def current_user
    return User.find session[:user_id] if session[:user_id]
    nil
  end

  def get_time_elapsed create_time
    seconds = Time.now - create_time

    days = (seconds / 86400).to_i
    seconds -= days * 86400

    hours = (seconds / 3600).to_i
    seconds -= hours * 3600

    minutes = (seconds / 60).to_i
    seconds -= minutes * 60

    return "#{ days } day(s)" if days > 1
    return "#{ hours } hour(s)" if hours > 1
    return "#{ minutes } min(s)" if minutes > 1
    "#{ seconds.to_i } sec(s)"
  end

end
