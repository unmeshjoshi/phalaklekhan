require 'json'

def parse_json(file_name, category)

  category2Id = {"vyakti"=> "G", "dinavishesh" => "D", "lalit" => "L", "kodi"=>"K", "vaishishtyapurna"=>"V"}
  File.open(file_name, "r") do |file|
    hashes  = []
    phalaks  = JSON.parse(file.read())
    count = 0;
    phalaks.each do |phalak|
      hash = phalak;
      phalak['category'] = category;
      phalak['_id'] = "yfvBlplFxMEByY#{category2Id[category]}#{count}"
      count = count + 1
      hashes.push(phalak)
      File.open('phalakdb.db', 'a') { |f| f.write(phalak.to_json + "\n") }
    end

  end
end

parse_json(ARGV[0], ARGV[1])