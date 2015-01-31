Deface::Override.new(:virtual_path  => "spree/user_registrations/new",
                 
:set_attributes => "div#new-customer",
:attributes      => {:class => "login-form"},
:name          => "signup_form")
