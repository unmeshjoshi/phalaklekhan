class ProfilePage  < BasePage
  def initialize session
    super session
    @session = session
  end

  def get_work_email
    @session.find(:css, "#work_email").text
  end

  def get_personal_email
    @session.find(:css, "#personal_email").text
  end

  def get_home_office
    @session.find(:css, "#home_office").text
  end

  def get_mobile
    @session.find(:css, "#mobile").text
  end

  def get_aliases
    @session.find(:css, "#alias").text
  end

  def get_full_name
    @session.find(:css, "#display_name").text
  end

  def get_role
    @session.find(:css, "#role").text
  end

  def get_emp_id
    @session.find(:css, "#emp_id").text
  end

  def get_home_id
    @session.find(:css, "#home_office").text
  end

  def get_work_phone
    @session.find(:css, "#Work")
  end

  def get_gtalk
    @session.find(:css, "#Gtalk")
  end

  def get_yahoo
    @session.find(:css, "#Yahoo")
  end

  def get_skype
    @session.find(:css, "#Skype")
  end

  def get_street_address
    @session.find(:css, "#street")
  end

  def get_state
    @session.find(:css, "#state")
  end

  def get_city
    @session.find(:css, "#city")
  end

  def get_country
    @session.find(:css, "#country")
  end

  def search_user user
    @session.fill_in('searchQuery', :with => user)
    @session.click_button('Go!')
    @session.find('.expand').click
    return @search_results_page = SearchResultPage.new(@session)
  end

  def edit
    @session.find(:css, "#edit_button").click
    return @edit_profile_page = EditProfilePage.new(@session)
  end

  def get_count user
    @session.fill_in('searchQuery', :with => user)
    @session.click_button('Go!')
    count = @session.find(:css, "#count").text
    return count.split("+").first
  end

end