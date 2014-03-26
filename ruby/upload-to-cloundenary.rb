require 'cloudinary'

Cloudinary.config do |config|
  config.cloud_name = 'dojwxtses'
  config.api_key = '571944265875972'
  config.api_secret = 'Fpbn-NRxf8DG90U7As20GMWSXIQ'
  config.cdn_subdomain = true
end


def upload_file(dir_name, file_name)
  file = File.open(dir_name + "/" + file_name, "r")
  Cloudinary::Uploader.upload(file)
  puts "Uploading file #{file_name}"
end


def upload_objects_in_directory (dir_name)
  Dir.entries(dir_name).each do |file_name|
    next if file_name == '.' or file_name == '..'
    upload_file(dir_name, file_name)
  end
end


upload_objects_in_directory(ARGV[0])

