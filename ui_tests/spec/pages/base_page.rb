class BasePage

  def initialize session
    @session = session
  end

  def logout
    @session.click_link "Logout"
  end
end