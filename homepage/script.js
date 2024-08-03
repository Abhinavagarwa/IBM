document.getElementById('submitBtn').addEventListener('click', () =>
    {
    
        const name = document.getElementById('name').value;
        const age = document.getElementById('ge').value; 
        const wage = document.getElementById('wage').value; 
        const member = document.getElementById('mem').value; 
        const choice = document.getElementById('choice').value; 
    
        let a = ""; 
        let b = "";
        let c="";
        let d="";
     
    
        const income=wage/member;
        if(age==""||wage==""||member==""||choice==""||name=="")
        {
            d="Please fill the fields";
        }
        else 
        {
        if (age < 15) 
        {
            a = "You should go to school and study now for a better future and take admission in government schools ";
            b="https://diksha.gov.in";
        } 
        else 
        {
            if (income > 972) 
            {
                a = "You are above the poverty line";
                b="https://www.givedirectly.org/";
            } 
            else 
            {
                if (choice == 1) {
                    a = "Please visit the government hospitals and several government health schemes, such as Ayushman Bharat, providing free health insurance up to ₹5 lakh per family annually; Janani Suraksha Yojana, promoting safe motherhood; Pradhan Mantri Jan Arogya Yojana, for hospitalization coverage; and Rashtriya Swasthya Bima Yojana, offering health insurance to low-income families.";
                    b = "https://www.mohfw.gov.in";
                } 
                else if (choice == 2) {
                    a = "India's government job schemes include MGNREGA, guaranteeing 100 days of rural employment; Pradhan Mantri Kaushal Vikas Yojana, promoting skill development for better job opportunities; Deen Dayal Upadhyaya Grameen Kaushalya Yojana, enhancing rural youth employability; and National Urban Livelihoods Mission, supporting urban poor with self-employment and skilled wage employment.";
                    b="https://labour.gov.in";
                } 
                else if (choice == 3) {
                    a = "India's government increase wage schemes include the Minimum Wages Act, ensuring fair pay across sectors; MGNREGA, guaranteeing higher wages for rural employment; the National Rural Livelihoods Mission, enhancing income through skill development; and the Pradhan Mantri Shram Yogi Maan-Dhan, offering pension benefits to improve wage security for unorganized workers.";
                    b="https://labour.gov.in";
                } 
                else if (choice == 4) {
                    a = "India's government financial knowledge schemes include Pradhan Mantri Jan Dhan Yojana, promoting banking access and financial literacy; National Strategy for Financial Education, enhancing financial awareness; Financial Literacy Centres (FLCs), providing financial education and counseling; and RBI's Project Financial Literacy, spreading financial knowledge through various educational initiatives and resources.";
                    b="https://www.rbi.org.in";           
                } 
                else if (choice == 5) {
                    a = "India’s family planning schemes include the National Family Planning Program, promoting contraceptive use and awareness; Mission Parivar Vikas, focusing on high fertility states; and Janani Suraksha Yojana, supporting safe motherhood and child health. These programs aim to control population growth and improve reproductive health.";
                    b="https://www.mohfw.gov.in"; 
                }
                else{
                    a="ph no: +919999999999 email:abc@hmail.com";
                    b="abc@hmail.com";
                }
            }
        }
    }
         c="Solution:";
         if(d=="")
        {
        document.getElementById("sol").innerHTML=c;
         document.getElementById("para").innerHTML=`<br>Hi ${name},<br>${a}`;
         document.getElementById("link").innerHTML=`<a href="${b}">Link:</a>`;
         }
         else
         {
            c="";
            b="";
            document.getElementById("sol").innerHTML=c;
            document.getElementById("para").innerHTML=d;
            document.getElementById("link").innerHTML=``;
         }
    });

    
