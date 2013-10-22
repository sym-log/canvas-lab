for i in $(eval echo {$1..$2..1})
do

if [ $i = $1 ]; then 
    echo "data:image/png;base64,$(base64 "$i.png")"  >> output.txt
else
echo "/ / /data:image/png;base64,$(base64 "$i.png")"  >> output.txt
fi

done
