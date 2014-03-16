require 'capybara-screenshot/rspec'
require 'capybara-screenshot'
require 'yaml'

RSpec.configure do |config|
  config.include Capybara::DSL
end