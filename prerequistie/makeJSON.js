cv_contact_id = !cv_contact_id ? '': cv_contact_id;
cv_country_id = !cv_country_id ? '': cv_country_id;

var JSON_CHAINED = '{'
+ '\"id\":\"'+cv_contact_id+'\"'
+ ',\"contact_type\":\"'+CONTACT_TYPE+'\"'
+ ',\"first_name\":\"'+firstname+'\"'
+ ',\"last_name\":\"'+lastname+'\"'
+ ',\"external_identifier\":\"'+id+'\"'
+ ',\"birth_date\":\"'+birthdate+'\"'
+ ',\"do_not_email\":\"'+no_subscription+'\"';
JSON_CHAINED += !cv_prefix_id ? '':',\"prefix_id\":\"'+cv_prefix_id+'\"';
// CustomFields-Individual
JSON_CHAINED += isEmpty(shirt_size) ? '':',\"custom_'+cv_customfield_shirtsize_id+'\":\"'+shirt_size+'\"';
JSON_CHAINED += ',\"api.email.create\":{'
    + '\"email\":\"'+email+'\"'
    + ',\"location_type_id\":1'
    + '}';
JSON_CHAINED += ',\"api.address.create\":{'
    + '\"location_type_id\":1'
    + ',\"street_address\":\"'+street_address+'\"'
    + ',\"postal_code\":\"'+postcode+'\"'
    + ',\"country_id\":\"'+cv_country_id+'\"'
    + '}';
JSON_CHAINED += ',\"api.phone.create\":{'
    + '\"phone":\"'+phone+'\"'
    + ',\"phone_type_id\":1'
    + ',\"location_type_id\":1'
    + '}';
JSON_CHAINED += ',\"api.phone.create\":{'
    + '\"website":\"'+website+'\"'
+ '}';
JSON_CHAINED += '}';
