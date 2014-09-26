flow_filename="$1"
record_limit="$2"
now=$(date +"%Y-%m-%d_%H-%M")

#Pentaho Data Integration path
pdi_path=/Users/chanunc/Documents/CPC/Pentaho/data-integration510

#Jobs & Tranformations path
source_path=/Users/chanunc/Documents/CPC/workspaces/OpenDemocracy_workspace/opendemocracy-datasync

#Logging: Nothing Error Minimal Basic Detailed Debug Row level
log_level=Basic

#bash $pdi_path/pan.sh \ /file:/$source_path/create-member.ktr  /level:Basic /logfile:/$source_path/logs/exexcution_log.log
bash $pdi_path/kitchen.sh \ /file:/$source_path/$flow_filename /level:$log_level /logfile:/$source_path/logs/exexcution_log.log -param:record_limit=$record_limit