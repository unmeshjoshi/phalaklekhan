class SearchResultPage < BasePage

  def initialize session
    super session
    @session = session
  end


  def get_full_name
    @session.find(:css, "header h2").text
  end

  def get_role
    @session.find(:css, "#title").text
  end

  def get_phone_number
     @session.find(:css, "#work").text
  end

  def get_email
    @session.find(:css, "#email").text
  end

  def get_mobile
    @session.find(:css, "#mobile").text
  end

  def get_gtalk
    @session.find(:css, "#Gtalk").text.split[1]
  end

  def get_yahoo
    @session.find(:css, "#Yahoo").text.split[1]
  end

  def get_skype
    @session.find(:css, "#Skype").text.split[1]
  end

  def get_location
    @session.find(:css, "#location").text
  end

  def get_alias
    @session.find(:css, "#alias").text
  end



end