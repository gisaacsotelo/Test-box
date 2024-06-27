def getElevetionCoords(linkCoordinates):
    """ Obtiene 5 perfiles de elevación para cada coordenada, regresa 5 vectores con las elevaciones """
    print(datetime.today().strftime('%Y-%m-%d %H:%M:%S'), ' - Se obtiene perfil de elevación...')
    # Elevation Profile
    dbs = ['aster30m', 'mapzen', 'srtm30m', 'ned10m', 'google']
    elevetionCoords = {db:[] for db in dbs}

    for i, coor in enumerate(linkCoordinates):
        #print('Coord ', i, ' de ', len(linkCoordinates), ': ', round(coor[0],2), ', ', round(coor[1],2))
        for db in dbs:
            #print('Databse: ', db)
            if db == 'google':
                queryStart = time.time()
                elapsedTime = 0
                while elapsedTime < 1200:
                    try:
                        response = requests.get("https://maps.googleapis.com/maps/api/elevation/json?locations={}%2C{}&key=AIzaSyDqgJSu4HwaMJ7-MCaXzG8_v7zEzdyPCfk".format(coor[1], coor[0]))
                        if response.ok:
                            elevetionCoords['google'].append(response.json()['results'][0]['elevation'])
                            break
                    except Exception as e:
                        pass                   
                    elapsedTime = time.time() - queryStart
            else:
                queryStart = time.time()
                elapsedTime = 0
                while elapsedTime < 1200:
                    try:
                        response = requests.get("https://api.opentopodata.org/v1/{}?locations={},{}".format(db, coor[1], coor[0]))                        
                    except Exception as e:
                        elevetionCoords[db].append(0)
                    else:
                        if response.ok:
                            elevetionCoords[db].append(response.json()['results'][0]['elevation'])
                            break
                    elapsedTime = time.time() - queryStart
    return np.asarray(list(elevetionCoords.values()), dtype='float64')