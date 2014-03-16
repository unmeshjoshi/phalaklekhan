class StatusPage < BasePage

  def initialize session
    super session
    @session = session
  end

  def visit
    @session.visit "https://contacts.thoughtworks.com/status"
  end

  def get_text
    @session.find(:css, "body").text
  end
end
