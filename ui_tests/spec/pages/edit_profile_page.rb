class EditProfilePage < BasePage

  def initialize session
    super session
    @session = session
  end

  def edit_profile user_info
    @session.fill_in('title', :with => user_info['role'])
    @session.fill_in('home_office', :with => user_info['home_office'])
    @session.fill_in('work_phone', :with => user_info['work_phone'])
    @session.fill_in("otherMobile", :with => user_info['mobile'])
    @session.fill_in('gtalk', :with => user_info['gtalk'])
    @session.fill_in('yahoo', :with => user_info['yahoo'])
    @session.fill_in('skype', :with => user_info['skype'])
    @session.fill_in('personal_email', :with => user_info['personal_email'])
    @session.fill_in('street_address', :with => user_info['street_address'])
    @session.fill_in('city', :with => user_info['city'])
    @session.fill_in('state', :with => user_info['state'])
    @session.fill_in('country', :with => user_info['country'])
    @session.click_button('Save')
    @session.fill_in('password', :with => "Th0ughtW0rks@2013" )
    @session.click_button('Save changes')
  end

  def cancel
    @session.click_button "Cancel"
  end

end