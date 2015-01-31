Deface::Override.new(:virtual_path  => "spree/user_sessions/new",
                     
                     :set_attributes => "div#existing-customer",
                     :attributes      => {:class => "login-form"},
                     :name          => "login_form")

