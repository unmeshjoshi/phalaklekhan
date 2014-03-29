require 'cloudinary'

Cloudinary.config do |config|
  config.cloud_name = 'dojwxtses'
  config.api_key = ''
  config.api_secret = ''
  config.cdn_subdomain = true
end


def upload_file(dir_name, file_name)
  file = File.open(dir_name + "/" + file_name, "r")
  hash = Cloudinary::Uploader.upload(file)
  hash['name'] = file_name
  puts "Uploading file #{file_name}"
  hash
end


def upload_objects_in_directory (dir_name, output_file_name)
  hashes = []
  Dir.entries(dir_name).each do |file_name|
    next if file_name == '.' or file_name == '..'
    hash = upload_file(dir_name, file_name)
    hashes.push(hash)
  end
  File.write(output_file_name + ".json", hashes.to_json)
end


upload_objects_in_directory(ARGV[0], ARGV[1])

