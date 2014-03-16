require 'rspec'
require 'capybara'
require 'capybara/dsl'
require 'spec_helper.rb'
require 'require_all'
require_all 'spec/pages/'
require 'capybara-screenshot/rspec'
require 'capybara-screenshot'

Capybara.default_driver = :selenium
CONFIG = YAML.load_file("config/config.yml")[ENV['NAME'].to_sym]

Capybara.default_wait_time = 20

Capybara.app_host = "https://preview.contacts.thoughtworks.com/"
Capybara.save_and_open_page_path = "spec/reports/screenshots/"


