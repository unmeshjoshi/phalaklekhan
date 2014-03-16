class OktaLogin < BasePage

  def initialize session
    super session
    @session = session
  end

  def visit_page url
    @session.visit url
    return self
  end

  def login user
    #@session.visit url
    @session.fill_in("user-signin", :with => "#{user[0]}")
    @session.fill_in("pass-signin", :with => "#{user[1]}")
    @session.click_button("Sign In")
    @session.fill_in("questionFactor.answer",:with =>"1000")
    @session.click_button("Verify")
   # @session.driver.browser.switch_to.alert.accept
    return @profile_page = ProfilePage.new(@session)
    #if(page.has_css? '#0oa57q9opZZFGNXZQETA_login')
    # click_button('#0oa57q9opZZFGNXZQETA_login')
  end
end