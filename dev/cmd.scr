for i in {1000..1999..1}
do

if [ $i = 0 ]; then 
    echo "data:image/png;base64,$(base64 "$i.png")"  >> output.txt
else
echo "/ / /data:image/png;base64,$(base64 "$i.png")"  >> output.txt
fi

done
