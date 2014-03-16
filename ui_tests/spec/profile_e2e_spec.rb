require 'test_helper'
require 'spec_helper'
require 'test_data/test_data'
require 'pry'

describe "Profiles e2e tests" do
  before(:all) do
    @login_page = OktaLogin.new(Capybara.current_session)
    url = CONFIG["url"]
    @login_page.visit_page url
    @profile_page = @login_page.login(CONFIG["User"])
  end

  describe "view profile" do
    it "verifies the correct user details on the profile page" do
      verify_view_profile_details $original_profile_info
    end
  end

  describe "edit profile" do
    it "verifies the edited fields come up correctly after changes" do
      @edit_profile_page = @profile_page.edit
      @edit_profile_page.edit_profile $new_profile_info
      verify_view_profile_details $new_profile_info
      @edit_profile_page = @profile_page.edit
      @edit_profile_page.edit_profile $original_profile_info
    end
  end

  describe "Validations for edit" do
    it "verifies all the invalid data filled in the edit form throws an error" do
      @edit_profile_page = @profile_page.edit
      @edit_profile_page.edit_profile $invalid_length_data
      verify_error_fields $error_messages_length
      @edit_profile_page.cancel
      @edit_profile_page = @profile_page.edit
      @edit_profile_page.edit_profile $invalid_data
      verify_error_fields $error_messages
      @edit_profile_page.cancel
    end
  end

  describe "get correct number of results" do
    it "verifies the number of results is equal to the number of employees returned for search" do
      verify_count_of_results "anand"
    end
  end

  describe "search for a co-worker" do
    it "verifies the correct user details on the profile page for the co-worker" do
      @search_results_page = @profile_page.search_user "Madhavi Keshav Tumma"
      verify_search_results
    end
  end

  after(:all) do
    @profile_page.logout
  end
end

def verify_error_fields(validation_messages)
  (page.has_text? validation_messages["role"]).should eql true
  (page.has_text? validation_messages["personal_email"]).should eql true
  (page.has_text? validation_messages["mobile"]).should eql true
  (page.has_text? validation_messages["work_phone"]).should eql true
  (page.has_text? validation_messages["home_office"]).should eql true
  (page.has_text? validation_messages["gtalk"]).should eql true
  (page.has_text? validation_messages["yahoo"]).should eql true
  (page.has_text? validation_messages["skype"]).should eql true
  (page.has_text? validation_messages["street_address"]).should eql true
  (page.has_text? validation_messages["city"]).should eql true
  (page.has_text? validation_messages["state"]).should eql true
  (page.has_text? validation_messages["country"]).should eql true
end


def verify_view_profile_details(profile_info)
  @profile_page.get_full_name.should eql profile_info["full_name"]
  @profile_page.get_role.should eql profile_info["role"]
  @profile_page.get_home_office.should eql profile_info["home_office"]
  @profile_page.get_emp_id.should eql "66666"
  @profile_page.get_work_email.should eql profile_info["work_email"]
  @profile_page.get_personal_email.should eql profile_info["personal_email"]
  @profile_page.get_mobile.should include profile_info["mobile"]
  @profile_page.get_work_phone.equal? profile_info["work_phone"]
  @profile_page.get_gtalk.equal? profile_info['gtalk']
  @profile_page.get_yahoo.equal? profile_info['yahoo']
  @profile_page.get_skype.equal? profile_info['skype']
  @profile_page.get_aliases.should include "mytwgeneric"
  @profile_page.get_aliases.should include "mytwgeneric1"
  @profile_page.get_street_address.equal? profile_info['street_address']
  @profile_page.get_city.equal? profile_info['city']
  @profile_page.get_state.equal? profile_info['state']
  @profile_page.get_country.equal? profile_info['country']
end

def verify_search_results
     @search_results_page.get_full_name.should eql $search_profile_info["full_name"]
     @search_results_page.get_role.should eql $search_profile_info["role"]
     @search_results_page.get_phone_number.should eql $search_profile_info["phone_number"]
     @search_results_page.get_location.should include $search_profile_info["location"]
     @search_results_page.get_email.should eql $search_profile_info["email"]
     @search_results_page.get_mobile.should eql $search_profile_info['mobile']
     @search_results_page.get_gtalk.should eql $search_profile_info['gtalk']
     @search_results_page.get_yahoo.should eql $search_profile_info['yahoo']
     @search_results_page.get_skype.should eql $search_profile_info['skype']
     @search_results_page.get_alias.should include $search_profile_info["alias"]
     @search_results_page.get_alias.should include $search_profile_info["alias"]
end

def verify_count_of_results  user
  @profile_page.get_count(user).should eql "10 result(s)"
end

#def verify_no_proxy_error
#  @status_page = StatusPage.new(Capybara.current_session)
#  @status_page.visit
#  @status_page.get_text.should include "This page is just to check status of the app through proxy."
#end



