$original_profile_info = {"full_name" => "Don't Mail Generic ID",
                "role" => "Generic email id",
                "work_email" => "mytw@thoughtworks.com",
                 "personal_email" => "venu.murthy@gmail.com",
                "mobile" => "+123456789",
                "work_phone" => "1234567890",
                  "home_office" => "pune",
                  "business_unit" => "ops",
                  "gtalk" => "g.talk",
                    "yahoo" => "y.talk",
                    "skype" => "s_talk",
                    "street_address" => "street",
                     "city" => "city",
                     "state" => "mh",
                      "country" => "India"}

$new_profile_info = {"full_name" => "Don't Mail Generic ID",
                     "role" => "new Generic email id",
                     "work_email" => "mytw@thoughtworks.com",
                     "personal_email" => "venu.murthy@gmail.com",
                     "mobile" => "+919923753524",
                     "work_phone" => "020 - 24336812",
                      "home_office" => "new pune",
                      "business_unit" => "new ops",
                      "gtalk" => "newgtalk",
                      "yahoo" => "newytalk",
                      "skype" => "newskype" ,
                      "street_address" => "street_new",
                     "city" => "city_new",
                      "state" => "mh_new",
                       "country" => "India_new"}

$invalid_length_data = { "role" => "0123456789abcdefghij0123456789a",
                  "personal_email" => "01234@6789abcdefghij01.3456789123456789012345678901",
                  "mobile" => "1212121212123456789012341234567890",
                  "work_phone"  => "12121212120201212 123456789012121",
                  "gtalk" => "0123456789abcdefghij0123456789a",
                  "home_office" => "0123456789abcdefghij0123456789a",
                  "yahoo" => "0123456789abcdefghij0123456789a",
                  "skype" => "0123456789abcdefghij0123456789a",
                  "street_address" => "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123451",
                  "city" => "0123456789abcdefghij0123456789a",
                  "state" => "0123456789abcdefghij0123456789a",
                  "country" => "0123456789abcdefghij0123456789a"}

$invalid_data = { "role" => "0123456789abcdefghij0123456789a",
                  "personal_email" => "abcd",
                  "mobile" => "!@76757577!Pune"  ,
                  "work_phone" => "!@76757577!Pune"  ,
                  "home_office" => "0123456789abcdefghij0123456789a",
                  "gtalk" => "pre.mish, nik.desh"  ,
                  "yahoo" => "pre.mish, nik.desh",
                  "skype" => "pre.mish, nik.desh",
                  "street_address" => "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123451",
                  "city" => "0123456789abcdefghij0123456789a",
                  "state" => "0123456789abcdefghij0123456789a",
                  "country" => "0123456789abcdefghij0123456789a"
}



$error_messages_length = {"role" => "Length can not exceed 30 characters",
                   "personal_email" => "Length can not exceed 50 characters",
                   "work_phone" => "Length can not exceed 20 characters",
                   "mobile" => "Length can not exceed 20 characters",
                   "gtalk" => "Length can not exceed 30 characters",
                   "yahoo" => "Length can not exceed 30 characters",
                   "skype" => "Length can not exceed 30 characters",
                   "street_address" => "Length can not exceed 255 characters",
                   "city" => "Length can not exceed 30 characters",
                   "state" => "Length can not exceed 30 characters",
                   "country" => "Length can not exceed 30 characters" }


$error_messages = { "personal_email" => "Not a valid e-mail address",
                    "mobile" => "Invalid Mobile Number(only digits, + and - allowed)"  ,
                    "work_phone" => "Invalid Phone Number(only digits, + and - allowed)"  ,
                    "gtalk" => "Invalid special character"  ,
                    "yahoo" => "Invalid special character",
                    "skype" => "Invalid special character"
}


$search_profile_info = {"full_name" => "Madhavi Keshav Tumma",
                        "role" => "business analyst",
                         "phone_number" => "(020) 4105 7704",
                        "location" => "Bangalore",
                        "email" => "madhavk@thoughtworks.com",
                        "mobile" => "9049007671",
                        "gtalk" => "madhavi.k.tumma",
                        "yahoo" => "madhavi25aug",
                        "skype" => "madhaviskype",
                        "alias" => "12844",
                        "alias" => "maddy"}



