require 'aws-sdk'


def seconds_in_days(days)
  days * 24 * 60 * 60
end



def cache_control_option
  options = {:cache_control => "public, max-age=" + seconds_in_days(365).to_s}
end

def set_caching_headers_on_all_objects

  phalaks_bucket = s3.buckets.first
  phalaks_bucket.objects.each do |image|
    image.copy_from(image, cache_control_option());
  end

end

def upload_file(dir_name, file_name, s3)
  file = File.open(dir_name + "/" + file_name, "r")
  phalaks_bucket = s3.buckets.first
  phalaks_bucket.objects[file_name].write(file, cache_control_option())

  puts "Uploading file #{file_name} to bucket #{phalaks_bucket.name}."
end

def s3
  s3 = AWS::S3.new(
      :access_key_id => '',
      :secret_access_key => '',
      :ec2_endpoint => 'ec2.us-west-2.amazonaws.com',
      :s3_endpoint => 's3-us-west-2.amazonaws.com'
  )
end

def upload_objects_in_directory (dir_name)
  Dir.entries(dir_name).each do |file_name|
    next if file_name == '.' or file_name == '..'
    upload_file(dir_name, file_name, s3())
  end
end


upload_objects_in_directory(ARGV[0])
#upload_file(ARGV[0],ARGV[1], s3())
