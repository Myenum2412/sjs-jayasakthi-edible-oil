export interface IndianState {
  districts: string[];
  stdCode?: string;
}

export const indianStates: Record<string, IndianState> = {
  'Tamil Nadu': {
    districts: ['Chennai', 'Coimbatore', 'Madurai', 'Salem', 'Tiruchirappalli', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi', 'Dindigul', 'Thanjavur', 'Kanchipuram', 'Karur', 'Nagercoil', 'Hosur', 'Kumbakonam', 'Cuddalore', 'Tiruppur', 'Sivaganga', 'Karaikudi'],
    stdCode: '44'
  },
  'Kerala': {
    districts: ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Thrissur', 'Palakkad', 'Kollam', 'Alappuzha', 'Kannur', 'Kottayam', 'Malappuram'],
    stdCode: '47'
  },
  'Karnataka': {
    districts: ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum', 'Gulbarga', 'Davangere', 'Bellary', 'Bijapur', 'Shimoga'],
    stdCode: '80'
  },
  'Andhra Pradesh': {
    districts: ['Hyderabad', 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Rajahmundry', 'Kurnool', 'Tirupati', 'Kakinada', 'Kadapa'],
    stdCode: '40'
  },
  'Telangana': {
    districts: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet'],
    stdCode: '40'
  },
  'Maharashtra': {
    districts: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur', 'Sangli', 'Jalgaon'],
    stdCode: '22'
  },
  'Gujarat': {
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Gandhinagar', 'Junagadh', 'Gandhidham', 'Anand'],
    stdCode: '79'
  },
  'Rajasthan': {
    districts: ['Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar'],
    stdCode: '141'
  },
  'Delhi': {
    districts: ['New Delhi', 'Central Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'North East Delhi', 'North West Delhi', 'Shahdara', 'South West Delhi'],
    stdCode: '11'
  },
  'West Bengal': {
    districts: ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri', 'Bardhaman', 'Malda', 'Kharagpur', 'Haldia', 'Jalpaiguri'],
    stdCode: '33'
  },
  'Uttar Pradesh': {
    districts: ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad', 'Meerut', 'Ghaziabad', 'Noida', 'Bareilly', 'Aligarh'],
    stdCode: '522'
  },
  'Punjab': {
    districts: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala', 'Bathinda', 'Pathankot', 'Hoshiarpur', 'Batala', 'Moga', 'Abohar'],
    stdCode: '161'
  },
  'Haryana': {
    districts: ['Gurgaon', 'Faridabad', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula'],
    stdCode: '124'
  },
  'Madhya Pradesh': {
    districts: ['Indore', 'Bhopal', 'Gwalior', 'Jabalpur', 'Ujjain', 'Sagar', 'Ratlam', 'Satna', 'Rewa', 'Murwara'],
    stdCode: '731'
  },
  'Bihar': {
    districts: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Arrah', 'Begusarai', 'Katihar'],
    stdCode: '612'
  },
  'Odisha': {
    districts: ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Berhampur', 'Sambalpur', 'Puri', 'Baleshwar', 'Bhadrak', 'Baripada', 'Jharsuguda'],
    stdCode: '674'
  },
  'Assam': {
    districts: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Bongaigaon', 'Dhubri', 'Sivasagar'],
    stdCode: '361'
  },
  'Jharkhand': {
    districts: ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh', 'Medininagar', 'Chaibasa'],
    stdCode: '651'
  },
  'Chhattisgarh': {
    districts: ['Raipur', 'Bhilai', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Raigarh', 'Jagdalpur', 'Ambikapur', 'Dhamtari'],
    stdCode: '771'
  },
  'Himachal Pradesh': {
    districts: ['Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Kullu', 'Chamba', 'Bilaspur', 'Hamirpur', 'Una', 'Nahan'],
    stdCode: '177'
  },
  'Jammu and Kashmir': {
    districts: ['Srinagar', 'Jammu', 'Anantnag', 'Baramulla', 'Sopore', 'Kathua', 'Udhampur', 'Poonch', 'Rajouri', 'Doda'],
    stdCode: '194'
  },
  'Uttarakhand': {
    districts: ['Dehradun', 'Haridwar', 'Roorkee', 'Haldwani', 'Rudrapur', 'Kashipur', 'Rishikesh', 'Nainital', 'Almora', 'Pithoragarh'],
    stdCode: '135'
  },
  'Goa': {
    districts: ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Mormugao', 'Bicholim', 'Curchorem', 'Canacona', 'Sanguem'],
    stdCode: '832'
  },
  'Manipur': {
    districts: ['Imphal', 'Thoubal', 'Bishnupur', 'Churachandpur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Chandel', 'Kangpokpi', 'Jiribam'],
    stdCode: '385'
  },
  'Meghalaya': {
    districts: ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Williamnagar', 'Resubelpara', 'Baghmara', 'Nongstoin', 'Mairang', 'Ampati'],
    stdCode: '364'
  },
  'Mizoram': {
    districts: ['Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Khawzawl', 'Hnahthial'],
    stdCode: '389'
  },
  'Nagaland': {
    districts: ['Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Kiphire', 'Longleng'],
    stdCode: '370'
  },
  'Tripura': {
    districts: ['Agartala', 'Udaipur', 'Dharmanagar', 'Kailasahar', 'Belonia', 'Khowai', 'Teliamura', 'Ambassa', 'Kumarghat', 'Sabroom'],
    stdCode: '381'
  },
  'Arunachal Pradesh': {
    districts: ['Itanagar', 'Naharlagun', 'Tawang', 'Bomdila', 'Pasighat', 'Tezu', 'Ziro', 'Daporijo', 'Along', 'Anini'],
    stdCode: '360'
  },
  'Sikkim': {
    districts: ['Gangtok', 'Namchi', 'Mangan', 'Gyalshing', 'Singtam', 'Rangpo', 'Jorethang', 'Rhenock', 'Ravangla', 'Soreng'],
    stdCode: '359'
  },
};

