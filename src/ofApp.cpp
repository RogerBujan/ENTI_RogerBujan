#include "ofApp.h"

const clock_t begin_time = clock();
clock_t old_time;
clock_t new_time;
unsigned int global_delta_time = 0;

bool key_down[255];
bool key_pressed[255];
bool key_released[255];

//--------------------------------------------------------------
void ofApp::setup(){
	//Control
	for (int i = 0; i < 255; i++) {
		key_down[i] = false;
		key_pressed[i] = false;
		key_released[i] = false;
	}

	//Time
	ofSetFrameRate(60);
	old_time = begin_time;
	new_time = begin_time;

	player1 = new Paddle();
	player1->setXY(100, 100);
	player1->setW(30);
	player1->setH(100);
}

//--------------------------------------------------------------
void ofApp::update(){
	//Delta time update (HAS TO BE DONE ALWAYS, ERRORS COULD HAPPEN OTHERWISE)
	old_time = new_time;
	new_time = clock() - begin_time;
	global_delta_time = int(new_time - old_time);
	//---------------------------------------------------

	if (key_down['W'] || key_down['w']) {
		player1->moveUp(2 * global_delta_time);
	}else if(key_down['S'] || key_down['s']) {
		player1->moveDown(2 * global_delta_time);
	}

	//--------------------End update---------------------
	for (int i = 0; i < 255; i++) { //Control for pressed and released events
		key_pressed[i] = false;
		key_released[i] = false;
	}
}

//--------------------------------------------------------------
void ofApp::draw(){
	ofClear(0);
	player1->render();
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){
	if (key >= 255 || key < 0) { return; }
	if (!key_down[key]) { //Only set pressed to true if the key is not being hold down 
						  //(pressed for first time)
		key_pressed[key] = true;
	}
	key_down[key] = true;
	key_released[key] = false;
}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){
	if (key >= 255 || key < 0) { return; }
	key_down[key] = false;
	key_pressed[key] = false;
	key_released[key] = true;
}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){
	ofSetWindowShape(960, 540);
}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
